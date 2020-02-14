export interface Iap{
    type: string;
    count: number;
}

export enum ItemType {OIL, CASH, NPC, DEC}

export interface Item {
    type:ItemType
    count:number
    npc:Npc
    resId:string
    mutantId:number
}

export interface Dec{
    type: string;
    resId: string;
    mutantId: number;
}

export enum Npc {ACCOUNTANT, CHEF, HARVESTER, LOBBYMANAGER, SCIENTIST, SECRETARY,}

export class JsonMaker{
    npcMap: {[key: number]:string} = {
        [Npc.ACCOUNTANT] : "accountant",
        [Npc.CHEF] : "chef",
        [Npc.HARVESTER] : "harvester",
        [Npc.LOBBYMANAGER] : "lobbymanager",
        [Npc.SCIENTIST] : "scientist",
        [Npc.SECRETARY] : "secretary",
    }

    public makeOil(oilCount) {
        return JSON.stringify({type:"oil", count: oilCount})
    }

    public makeCash(cashCount) {
        return JSON.stringify({type:"coin", count:cashCount})
    }

    public makeNpc(npc) {
        return JSON.stringify({type:this.npcMap[npc], count:1})
    }

    public makeDec(mutant_id:number, res_id) {
        return JSON.stringify({type:"dec", resId: res_id, mutantId: mutant_id})
    }
}