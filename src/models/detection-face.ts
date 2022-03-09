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



/**
 * 
 * @export
 * @interface DetectionFace
 */
export interface DetectionFace {
    /**
     * Faces index used to identify faces in scope of one photo.
     * @type {number}
     * @memberof DetectionFace
     */
    faceIndex?: number;
    /**
     * Main coordinates of the detected face (eyes, nose, lips, ears and etc.).
     * @type {Array<Array<number>>}
     * @memberof DetectionFace
     */
    landmarks?: Array<Array<number>>;
    /**
     * Rectangular area of the detected face. First element - X-axis coordinate. Second element - Y-axis coordinate. (X, Y) - left top point. Third element - rectangular width. Fourth element - rectangular height.
     * @type {Array<number>}
     * @memberof DetectionFace
     */
    roi?: Array<number>;
    /**
     * Formatted base64 face detection image.
     * @type {string}
     * @memberof DetectionFace
     */
    thumbnail?: string;
}


