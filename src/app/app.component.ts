import { Component, Input } from '@angular/core';
import { JsonMaker } from './JsonMaker';
import { Npc } from './JsonMaker';
import { Item } from './JsonMaker';
import { ItemType } from './JsonMaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fileNameList = [
    'addboard_m01_f00.png',
    'addboard_m02_f00.png',
    'addboard_m03_f00.png',
    'addboard_m04_f00.png',
    'addboard_m05_f00.png',
    'addboard_m06_f00.png',
    'addboard_m07_f00.png',
    'addboard_m08_f00.png',
    'addboard_m09_f00.png',
    'addboard_m10_f00.png',
    'addboard_m11_f00.png',
    'addboard_m12_f00.png',
    'addboard2_m00_f00.png',
    'addboard2_m01_f00.png',
    'addboard2_m02_f00.png',
    'addboard2_m03_f00.png',
    'addboard2_m04_f00.png',
    'addboard2_m05_f00.png',
    'addboard2_m06_f00.png',
    'addboard2_m07_f00.png',
    'addboard2_m08_f00.png',
    'addboard2_m09_f00.png',
    'addboard2_m10_f00.png',
    'addboard2_m11_f00.png',
    'chair_back_m00_f00.png',
    'chair_back_m01_f00.png',
    'chair_back_m02_f00.png',
    'chair_back_m03_f00.png',
    'chair_back_m04_f00.png',
    'chair_back_m05_f00.png',
    'chair_back_m06_f00.png',
    'chair_back_m07_f00.png',
    'chair_back_m08_f00.png',
    'chair_back_m09_f00.png',
    'chair_back_m10_f00.png',
    'chair_back_m11_f00.png',
    'chair_back_m12_f00.png',
    'chair_back_m13_f00.png',
    'chair_back_m14_f00.png',
    'chair_back_m15_f00.png',
    'chair_back_m16_f00.png',
    'chair_face_m00_f00.png',
    'chair_face_m01_f00.png',
    'chair_face_m02_f00.png',
    'chair_face_m03_f00.png',
    'chair_face_m04_f00.png',
    'chair_face_m05_f00.png',
    'chair_face_m06_f00.png',
    'chair_face_m07_f00.png',
    'chair_face_m08_f00.png',
    'chair_face_m09_f00.png',
    'chair_face_m10_f00.png',
    'chair_face_m11_f00.png',
    'chair_face_m12_f00.png',
    'chair_face_m13_f00.png',
    'chair_face_m14_f00.png',
    'chair_face_m15_f00.png',
    'chair_face_m16_f00.png',
    'chair2_m00_f00.png',
    'chair2_m01_f00.png',
    'chair2_m02_f00.png',
    'chair2_m03_f00.png',
    'chair2_m04_f00.png',
    'chair2_m05_f00.png',
    'chair2_m06_f00.png',
    'chair2_m07_f00.png',
    'chair2_m08_f00.png',
    'chair2_m09_f00.png',
    'chair2_m10_f00.png',
    'chair2_m11_f00.png',
    'chair2_m12_f00.png',
    'chair2_m13_f00.png',
    'chair2_m14_f00.png',
    'chair2_m15_f00.png',
    'chair3_m00_f00.png',
    'chair3_m01_f00.png',
    'chair3_m02_f00.png',
    'chair3_m03_f00.png',
    'chair3_m04_f00.png',
    'chair3_m05_f00.png',
    'chair3_m06_f00.png',
    'chair3_m07_f00.png',
    'chair3_m08_f00.png',
    'chair3_m09_f00.png',
    'chair3_m10_f00.png',
    'chair3_m11_f00.png',
    'chair3_m12_f00.png',
    'chair3_m13_f00.png',
    'chair3_m14_f00.png',
    'chair3_m15_f00.png',
    'chair3_m16_f00.png',
    'floorSet_m00_f00.png',
    'floorSet_m01_f00.png',
    'floorSet_m02_f00.png',
    'floorSet_m03_f00.png',
    'floorSet_m04_f00.png',
    'table_m00_f00.png',
    'table_m01_f00.png',
    'table_m02_f00.png',
    'table_m03_f00.png',
    'table_m04_f00.png',
    'table_m05_f00.png',
    'table_m06_f00.png',
    'table_m07_f00.png',
    'table_m08_f00.png',
    'table_m09_f00.png',
    'table_m10_f00.png',
    'table_m11_f00.png',
    'table_m12_f00.png',
    'table_m13_f00.png',
    'table_m14_f00.png',
    'table_m15_f00.png',
    'table_m16_f00.png',
    'table_m17_f00.png',
    'table_m18_f00.png',
    'table_m19_f00.png',
    'table_m20_f00.png',
    'table_m21_f00.png',
    'table_m22_f00.png',
    'table_m23_f00.png',
    'table_m24_f00.png',
    'table_m25_f00.png',
    'table_m26_f00.png',
    'table_m27_f00.png',
    'table_m28_f00.png',
    'table_m29_f00.png',
    'table_m30_f00.png',
    'table_m31_f00.png',
    'table_m32_f00.png',
    'table2_m00_f00.png',
    'table2_m01_f00.png',
    'table2_m02_f00.png',
    'table2_m03_f00.png',
    'table2_m04_f00.png',
    'table2_m05_f00.png',
    'table2_m06_f00.png',
    'table2_m07_f00.png',
    'table2_m08_f00.png',
    'table2_m09_f00.png',
    'table2_m10_f00.png',
    'table2_m11_f00.png',
    'table2_m12_f00.png',
    'table2_m13_f00.png',
    'table2_m14_f00.png',
    'table2_m15_f00.png',
    'table2_m16_f00.png',
    'table2_m17_f00.png',
    'table2_m18_f00.png',
    'table2_m19_f00.png',
    'table2_m20_f00.png',
    'table2_m21_f00.png',
    'table2_m22_f00.png',
    'table2_m23_f00.png',
    'table2_m24_f00.png',
    'table2_m25_f00.png',
    'table2_m26_f00.png',
    'table2_m27_f00.png',
    'table2_m28_f00.png',
    'table2_m29_f00.png',
    'table2_m30_f00.png',
    'table2_m31_f00.png',
    'table2_m32_f00.png'
  ]

  title = 'GiftCodeGenerator';
  jsonResult:string = ""
  itemContainer:Item[] = [] 

  count:number = 0

  jsonMaker = new JsonMaker()
  AppComponent() {
    this.jsonResult = this.jsonMaker.makeCash(1000)
  }

  onOilBtnClick() {
    let item = {type: ItemType.OIL, count: this.count, npc:Npc.ACCOUNTANT, resId:"", mutantId: 0}
    this.itemContainer[this.itemContainer.length] = item
    this.refreshJsonResult()
  }

  onCashBtnClick() {
    let item = {type: ItemType.CASH, count: this.count, npc:Npc.ACCOUNTANT, resId:"", mutantId: 0}
    this.itemContainer[this.itemContainer.length] = item
    this.refreshJsonResult()
  }

  onNpcBtnClick(npc_arg:Npc) {
    let item = {type: ItemType.NPC, count: 1, npc:npc_arg, resId:"", mutantId: 0}
    this.itemContainer[this.itemContainer.length] = item
    this.refreshJsonResult()
  }

  onDecBtnClick(dec_arg:string) {
    var result = this.parseDecFilenameResId(dec_arg)
    let item = {type: ItemType.DEC, count: 1, npc:Npc.ACCOUNTANT, resId:result.resId, mutantId: result.mutantId}
    this.itemContainer[this.itemContainer.length] = item
    this.refreshJsonResult()
  }

  refreshJsonResult() {
    if(this.itemContainer.length <= 0)
      return
    var str = "["
    for(let item of this.itemContainer) {
      str += this.parseItemToJson(item)
      str += ","
    }
    str = str.substring(0, str.length -1)
    str += "]"
    this.jsonResult = str
  }

  parseItemToJson(item:Item) {
    if(item.type == ItemType.OIL) {
      return this.jsonMaker.makeOil(item.count)
    }else if(item.type == ItemType.CASH) {
      return this.jsonMaker.makeCash(item.count)
    }else if(item.type == ItemType.NPC) {
      return this.jsonMaker.makeNpc(item.npc)
    }else if(item.type == ItemType.DEC) {
      return this.jsonMaker.makeDec(item.mutantId, item.resId)
    }
  }

  parseDecFilenameResId(fileName:string) {
    var splitted = fileName.split('_', 5)
    var res_id = splitted[0]
    var mutantstr = splitted[1].substring(1, splitted[1].length);
    if(res_id == 'chair') {
      res_id = splitted[0] + '_' + splitted[1]
      mutantstr = splitted[2].substring(1, splitted[2].length)
    }
    return {resId: res_id, mutantId: Number(mutantstr)}
  }

  onCountInput(event) {
    this.count = Number(event.target.value)
  }
}
