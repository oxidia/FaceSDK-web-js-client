/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API
 *
 * The version of the OpenAPI document: 3.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { MatchImageDetection } from './match-image-detection';
import { MatchImageResult } from './match-image-result';

/**
 * 
 * @export
 * @interface MatchResponseAllOf
 */
export interface MatchResponseAllOf {
    /**
     * 
     * @type {Array<MatchImageResult>}
     * @memberof MatchResponseAllOf
     */
    results?: Array<MatchImageResult>;
    /**
     * 
     * @type {Array<MatchImageDetection>}
     * @memberof MatchResponseAllOf
     */
    detections?: Array<MatchImageDetection>;
}


