import { HttpApiServices } from "./HttpApiServices";

export class ModuloServices extends HttpApiServices {

    baseUrl = '/modulo';

    async getModulos(){
        return await this.get(this.baseUrl);
    }

    async getModuloById(id: string){
        return await this.get(this.baseUrl+'/'+id);
    }

    async getMeetObjectsById(id: string){
        return await this.get(this.baseUrl+'/objects/'+id);
    }

    async deleteModulo(id: string){
        return await this.delete(this.baseUrl+'/'+id);
    }

    async createModulo(body: any){
        return await this.post(this.baseUrl, body);
    }

    async updateModulo(body: any, id: string){
        return await this.put(this.baseUrl+'/'+id, body);
    }
}