export async function seed(knex) {
  await knex('missing_cats').insert([
    {
      microchip: true,
      microchip_number: '21535884',
      user_id_mc: 1,
      cat_name: 'Creed',
      breed: 'Domestic',
      color: 'Grey/White',
      description:
        'Creed is new to the area (5 Weeks) and was only let out last week, he’s never gone missing before. He’s very vocal and friendly. He has a distinctive trail of white fur running from his mouth to his tuxedo on his chest',
      date_lost: '2021-06-12',
      location: 'Beach Haven, Auckland',
      missing_cat_phone: '022-021-2355',
      missing_cat_email: 'daniel@kingston.com',
      missing_image_url:
        'uploads/creed-1.jpg,uploads/creed-2.jpg,uploads/creed-3.jpg,uploads/creed-4.jpg,uploads/creed-5.jpg',
      cat_missing: true,
    },
    {
      microchip: true,
      microchip_number: '21535884',
      user_id_mc: 2,
      cat_name: 'Edward',
      breed: 'Persian',
      color: 'White/Brown',
      description:
        "Edward, a charming Persian cat with a luxurious white and brown coat, has gone missing. Known for his regal appearance and friendly demeanor, Edward was last seen in the Parkside neighborhood. He has a distinctive fluffy tail and bright, expressive eyes. If you have any information, please contact [Owner's Phone Number].",
      date_lost: '2022-02-20',
      location: 'Ponsonby, Auckland',
      missing_cat_phone: '022-987-6543',
      missing_cat_email: 'owner@email.com',
      missing_image_url:
        'uploads/edward-1.jpeg,uploads/edward-2.jpeg,uploads/edward-3.jpeg,uploads/edward-4.jpeg,uploads/edward-5.jpeg',
      cat_missing: true,
    },
    {
      microchip: false,
      microchip_number: null,
      user_id_mc: null,
      cat_name: 'Chaddles',
      breed: 'Domestic',
      color: 'Black',
      description:
        "Chaddles, a sleek and mysterious black Domestic cat, has gone missing in the Willowdale area. Chaddles is known for being both independent and affectionate. If you have any information about Chaddles' whereabouts, please contact [Owner's Phone Number].",
      date_lost: '2022-08-05',
      location: 'Kilbirnie, Wellington',
      missing_cat_phone: '022-555-1234',
      missing_cat_email: 'chaddles.owner@email.com',
      missing_image_url:
        'uploads/chaddles-1.jpg,uploads/chaddles-2.jpg,uploadss/chaddles-3.jpg,uploads/chaddles-4.jpeg,uploads/chaddles-5.jpg',
      cat_missing: true,
    },
    {
      microchip: true,
      microchip_number: '73218956',
      user_id_mc: 3,
      cat_name: 'Butters',
      breed: 'Domestic',
      color: 'Ginger',
      description:
        "Butters, an adorable ginger Domestic cat, is currently missing in the Riverside neighborhood. Butters is known for being playful and friendly, with a distinctive orange fur coat. If you have any information about Butters' location, please contact [Owner's Phone Number].",
      date_lost: '2022-11-10',
      location: 'Tui Park, Beach Haven',
      missing_cat_phone: '022-333-7890',
      missing_cat_email: 'butters.owner@email.com',
      missing_image_url:
        'uploads/butters-1.jpg,uploads/butters-2.jpg,uploads/butters-3.jpg,uploads/butters-4.jpg,uploads/butters-5.jpeg',
      cat_missing: true,
    },
  ])
}
