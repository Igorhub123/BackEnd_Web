import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function parseDbUrl(url: string = process.env.DATABASE_URL || ''): TypeOrmModuleOptions {
  if (!url) {
    throw new Error('DATABASE_URL is not defined');
  }

  const pattern = /postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/([^?]+)/;
  const matches = url.match(pattern);

  if (!matches) {
    throw new Error('Invalid database URL format');
  }

  const [, username, password, host, port, database] = matches;

  return {
    type: 'postgres',
    host,
    port: parseInt(port),
    username,
    password,
    database,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV !== 'production',
  };
}

export const databaseConfig = parseDbUrl(); 