
import { Injectable } from '@angular/core';
import { ConfigModule } from './config.module';

import { Config } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ConfigModule
})
export class ConfigService {
  private config: Config;

  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http
      .get<Config>('../assets/config/config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  public get(): Config {
    return this.config;
  }
}
