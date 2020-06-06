import React, {
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiMoon, FiSun, FiCheckCircle } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import axios from "axios";

import Dropzone from "../../components/Dropzone";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import logoDarkImg from "../../assets/logo-dark.svg";

import { Container, Form, ItemsGrid, CompleteScreen } from "./styles";
import useCustomTheme from "../../hooks/useCustomTheme";

interface Items {
  id: string;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const history = useHistory();
  const { handleChangeTheme, theme } = useCustomTheme();

  const [createSuccess, setCreateSuccess] = useState(false);

  const [items, setItems] = useState<Items[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedFile, setSelectedFile] = useState<File>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    api.get("items").then((res) => setItems(res.data));
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((res) => {
        const ufInitials = res.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") return;
    console.log("presunto");
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`
      )
      .then((res) => {
        const cityNames = res.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  const handleSelectUf = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUf(e.target.value);
  }, []);

  const handleSelectCity = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  }, []);

  const handleMapClick = useCallback((e: LeafletMouseEvent) => {
    setSelectedPosition([e.latlng.lat, e.latlng.lng]);
  }, []);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSelectItem = useCallback(
    (id: string) => {
      const alreadySelected = selectedItems.findIndex((item) => item === id);

      if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter((item) => item !== id);
        setSelectedItems(filteredItems);
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    },
    [selectedItems]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { name, email, whatsapp } = formData;
      const uf = selectedUf;
      const city = selectedCity;
      const [latitude, longitude] = selectedPosition;
      const items = selectedItems;

      const data = new FormData();

      data.append("name", name);
      data.append("email", email);
      data.append("whatsapp", whatsapp);
      data.append("uf", uf);
      data.append("city", city);
      data.append("latitude", String(latitude));
      data.append("longitude", String(longitude));
      data.append("items", items.join(","));

      if (selectedFile) {
        data.append("image", selectedFile);
      }

      await api.post("points", data);

      setCreateSuccess(true);
      
      setTimeout(() => {
        setCreateSuccess(false);
        history.push("/");
      }, 3000);
    },
    [
      selectedFile,
      formData,
      selectedUf,
      selectedCity,
      selectedPosition,
      selectedItems,
      history,
    ]
  );

  return (
    <Container>
      <header>
        <img src={theme === "light" ? logoImg : logoDarkImg} alt="Ecoleta" />

        <button onClick={() => handleChangeTheme()}>
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <div className="form-wrapper">
        <Form onSubmit={handleSubmit}>
          <h1>
            Cadastro do <br /> ponto de coleta
          </h1>

          <Dropzone onFileUploaded={setSelectedFile} />

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="name">Nome da entidade</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="field">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Selecione o endereço no mapa</span>
            </legend>

            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              {theme === "light" ? (
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              ) : (
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
              )}

              <Marker position={selectedPosition} />
            </Map>

            <div className="field-group">
              <div className="field">
                <label htmlFor="uf">Estado (UF)</label>
                <select
                  onChange={handleSelectUf}
                  value={selectedUf}
                  name="uf"
                  id="uf"
                >
                  <option value="0">Selecione uma UF</option>
                  {ufs.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select
                  onChange={handleSelectCity}
                  value={selectedCity}
                  name="city"
                  id="city"
                >
                  <option value="0">Selecione uma cidade</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Ítens de coleta</h2>
              <span>Selecione um ou mais ítens abaixo</span>
            </legend>

            <ItemsGrid>
              {items.map((item) => (
                <li
                  className={selectedItems.includes(item.id) ? "selected" : ""}
                  key={item.id}
                  onClick={() => handleSelectItem(item.id)}
                >
                  <img src={item.image_url} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ItemsGrid>
          </fieldset>
          <button type="submit">Cadastrar ponto de coleta</button>
        </Form>
      </div>
      {createSuccess && <CompleteScreen>
        <FiCheckCircle />
        <h3>Cadastro concluído!</h3>
      </CompleteScreen>}
    </Container>
  );
};

export default CreatePoint;
