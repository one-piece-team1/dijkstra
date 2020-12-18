export declare class HaversineFactory {
    /**
     * @description Get Distance for curve distance
     * @public
     * @param {number[]} coordStart coordStart[0] represent latitude coordStart[1] represent longtitude
     * @param {number[]} coordEnd coordEnd[0] represent latitude coordEnd[1] represent longtitude
     * @param {boolean} isMiles default is miles, otherwise use kilometer
     * @returns {number}
     */
    static calc(coordStart: number[], coordEnd: number[], isKilometer?: boolean): number;
}
