export class SkiResortDetails{
    _id:number;
    name: string;
    description:string;
    country: string;
    highest_point: string;
    base_elevation_m: number;
    picture: string;
    constructor(obj?:any){
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.country = obj && obj.country || 0;
        this.highest_point = obj && obj.highest_point || 0;
        this.base_elevation_m = obj && obj.base_elevation_m || 0;
        this.picture = obj && obj.picture || '';

    }
}