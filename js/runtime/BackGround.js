/**
 * Created by Administrator on 2018/2/6.
 * function : xxxxx
 */
import {Sprite} from "../base/Sprite";
import { DataStore } from "../base/DataStore";

// 背景
export class BackGround extends Sprite{
  constructor() {
    const image = Sprite.getImage('background')
    super(image,
      0, 0,
      image.width, image.height,
      0, 0,
      DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height)
  }
}