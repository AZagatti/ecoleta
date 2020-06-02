import Knex from "knex";

import { uuidGenerationRaw } from "../../utils/generateUuid";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("point_items", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw(uuidGenerationRaw));

    table.string("point_id").notNullable().references("id").inTable("points");

    table.string("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("point_items");
}
