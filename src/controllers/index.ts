import { HelloController } from './hello-controller';
import { HelloObjectController } from './hello-object-controller';
import { HelloIocDirectController, HelloIocInterfaceController } from './hello-ioc-controller';
import { HelloServiceBase, HelloServiceImpl, IocHelloService } from './ioc-services';
import { TestController } from "./test-controller";

export default [
  HelloController,
  HelloObjectController,
  TestController,
  // The IOC controllers
  HelloIocDirectController,
  HelloIocInterfaceController,

  // Don't forget to load these services, or IOC won't find them.
  IocHelloService,
  HelloServiceBase,
  HelloServiceImpl
];
