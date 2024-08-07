import { OpenFeature } from '@openfeature/server-sdk';
import { FlagdProvider } from '@openfeature/flagd-provider';

/** 
 * OpenFeature client is initiated.
 * As of now, no targetKey is provided but must be added in future.
 * The targetKey is the key that is used to identify the target.
 * As of now the flagd is run using local docker container.
 */
OpenFeature.setProvider(
  new FlagdProvider() // FlagdProvider is initiated, other host details will be added when flagd is run on other host.
);

const openFeatureClient = OpenFeature.getClient(); // OpenFeature client is initiated.

export { openFeatureClient };