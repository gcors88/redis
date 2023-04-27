import 'reflect-metadata';

import { container } from './config/container';
import { Bootstrap } from './Bootstrap';

const application = container.get(Bootstrap);

application.start();
