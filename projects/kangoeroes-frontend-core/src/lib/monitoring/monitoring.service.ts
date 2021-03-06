import { Injectable } from '@angular/core';
import { ApplicationInsights, DistributedTracingModes } from '@microsoft/applicationinsights-web';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {
  appInsights: ApplicationInsights;
  constructor(private configService: ConfigService) {

  }

 public startAppInsights() {
const config = this.configService.get();
const instrumentationKey = config.appInsightsInstrumentationKey;
this.appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: instrumentationKey,
    enableAutoRouteTracking: true,
   // enableCorsCorrelation: true,
    distributedTracingMode: DistributedTracingModes.W3C,
  },
});
this.appInsights.loadAppInsights();

const initializer = (envelope) => {
  envelope.tags['ai.cloud.role'] = config.applicationName;
};

this.appInsights.addTelemetryInitializer(initializer);
  }

  logPageView(name?: string, url?: string) {
    // option to call manually
    this.appInsights.trackPageView({
      name: name,
      uri: url,
    });
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({
      exception: exception,
      severityLevel: severityLevel,
    });
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }
}
