import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('pessoa', table => {
        table.increments('id').primary(),
        table.string('nome', 255).notNullable()
    })
}

export async function down(knex: Knex) {
    knex.schema.dropTable('pessoa')
}