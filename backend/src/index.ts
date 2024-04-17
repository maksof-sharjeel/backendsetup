import 'dotenv/config';
import fastify from 'fastify';
import { mainPlugin } from './plugin';


const PORT = process.env.PORT || 7000;

const app = fastify({
  maxParamLength: 5000,
  logger: true
})
app.register(mainPlugin)



export async function startServer() {
  try {
    await app.listen({
      port: PORT as number,
    });
  } catch (e: any) {
    app.log.error(e);
    process.exit();
  }
}

startServer()