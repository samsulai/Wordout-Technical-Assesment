import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  port: number;
  mongoUri: string;
  nodeEnv: string;
}

const getEnvConfig = (): EnvConfig => {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const mongoUri = process.env.MONGO_URI;
  const nodeEnv = process.env.NODE_ENV || 'development';

  if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is required');
  }

  return {
    port,
    mongoUri,
    nodeEnv,
  };
};

export const config = getEnvConfig();
