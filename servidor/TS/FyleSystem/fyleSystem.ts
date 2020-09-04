import path from 'path'
import fs from 'fs'
import uniqid from 'uniqid'

export default class FileSystem {
    constructor() {}

    public getFotoUrl(usId: string, usIm: string) {
        const foto = path.resolve(__dirname,'../productofto',usId,usIm)
        const existe = fs.existsSync(foto)
        if(!existe) {
            return path.resolve(__dirname,'../productofto/default/perfil.svg')
        }
        return foto
    }

}