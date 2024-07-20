const queries = {
  query_1: `  CREATE TABLE IF NOT EXISTS pharma_db.users (
        id SERIAL PRIMARY KEY, 
        createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        deletedAt TIMESTAMPTZ DEFAULT NULL,
        createdBy VARCHAR(100) DEFAULT NULL,
        updatedBy VARCHAR(100) DEFAULT NULL,
        deletedBy VARCHAR(100) DEFAULT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL, 
        userType VARCHAR(10) NOT NULL, 
        phone VARCHAR(15),
        countryCode VARCHAR(10)`,
  query_2: "ALTER TABLE pharma_db.users ADD password VARCHAR(100)",
  query_3: ` CREATE TABLE IF NOT EXISTS pharma_db.products (
    id SERIAL PRIMARY KEY , 
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deletedAt TIMESTAMPTZ DEFAULT NULL,
    createdBy VARCHAR(100) DEFAULT NULL,
    updatedBy VARCHAR(100) DEFAULT NULL,
    deletedBy VARCHAR(100) DEFAULT NULL,
    name VARCHAR(100) NOT NULL , 
    description VARCHAR(1000) NOT NULL,
    price INT NOT NULL , 
    quantity INT DEFAULT 0 ,
    discount INT , 
    tag VARCHAR(100)
  )`,
  query_4: "ALTER TABLE pharma_db.products ADD isActive boolean DEFAULT TRUE",
  query_5: "ALTER TABLE pharma_db.users ADD isActive boolean DEFAULT TRUE",

};
