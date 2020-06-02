import Knex from "knex";

import { uuidGenerationRaw } from "../../utils/generateUuid";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("points", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw(uuidGenerationRaw));
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitude").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("points");
}
