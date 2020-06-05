import { Request, Response } from "express";

import knex from "../database/connection";

class PointsController {
  public async index(req: Request, res: Response) {
    const { city, uf, items } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => item.trim());

    let points: { image: string }[] = [];

    if (!city && !uf) {
      points = await knex("points")
        .join("point_items", "points.id", "=", "point_items.point_id")
        .whereIn("point_items.item_id", parsedItems)
        .distinct()
        .select("points.*");
    } else if (!city && uf) {
      points = await knex("points")
        .join("point_items", "points.id", "=", "point_items.point_id")
        .whereIn("point_items.item_id", parsedItems)
        .where("uf", String(uf))
        .distinct()
        .select("points.*");
    } else if (city && !uf) {
      points = await knex("points")
        .join("point_items", "points.id", "=", "point_items.point_id")
        .whereIn("point_items.item_id", parsedItems)
        .where("city", String(city))
        .distinct()
        .select("points.*");
    } else if (city && uf) {
      points = await knex("points")
        .join("point_items", "points.id", "=", "point_items.point_id")
        .whereIn("point_items.item_id", parsedItems)
        .where("city", String(city))
        .where("uf", String(uf))
        .distinct()
        .select("points.*");
    }

    const serializedPoints = points.map((point) => ({
      ...point,
      image_url: `http://192.168.0.101:3333/uploads/points/${point.image}`,
    }));

    return res.json(serializedPoints);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res.status(400).json({ message: "Point not found." });
    }

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.0.101:3333/uploads/points/${point.image}`,
    };

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return res.json({ point: serializedPoint, items });
  }

  public async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    const trx = await knex.transaction();

    const point = {
      image: req.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    await trx("points").insert(point);

    const { id: point_id } = await trx("points").where("email", email).first();

    const pointItems = items
      .split(",")
      .map((item: string) => item.trim())
      .map((item_id: string) => ({
        item_id,
        point_id,
      }));

    await trx("point_items").insert(pointItems);

    await trx.commit();

    return res.json({ id: point_id, ...point });
  }
}

export default PointsController;
