import { Knex } from 'knex';

export const seed = async (knex: Knex): Promise<void> => {
  await knex('example_table').del();
  await knex('example_table').insert([
    { name: 'Billy' },
    { name: 'Timmy' },
    { name: 'Jimmy' },
  ]);
};
