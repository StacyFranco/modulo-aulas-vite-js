import { HttpApiServices } from "./HttpApiServices";

export class AulaServices extends HttpApiServices {

    baseUrl = '/aula';

    async getAulas(id: string){
        return await this.get(this.baseUrl+'/modulo/'+id);
    }

    async getAulaById(id: string){
        return await this.get(this.baseUrl+'/'+id);
    }

    async deleteAula(id: string){
        return await this.delete(this.baseUrl+'/'+id);
    }

    async createAula(body: any){
        return await this.post(this.baseUrl, body);
    }

    async updateAula(body: any, id: string){
        return await this.put(this.baseUrl+'/'+id, body);
    }
}