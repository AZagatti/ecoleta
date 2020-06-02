import Knex from "knex";

import { uuidGenerationRaw } from "../../utils/generateUuid";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("items", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw(uuidGenerationRaw));
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("items");
}
