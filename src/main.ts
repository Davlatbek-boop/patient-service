import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: "patient",
        protoPath: join(process.cwd(), "src/proto/patient.proto"),

        url: "0.0.0.0:50052",
      },
    }
  );

  await app.listen();
  console.log("Patient microservice is listening on gRPC port 50052");
}
bootstrap();
