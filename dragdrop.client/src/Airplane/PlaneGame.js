import { ItemTypes } from "../ItemTypes";

export class Game {
    planePosition = [25,25];
    observers = [];

    observe(o) {
      this.observers.push(o);
      this.emitChange();
      return () => {
        this.observers = this.observers.filter((t) => t !== o);
      };
    };

    movePlane(toX, toY) {
      this.planePosition = [toX, toY];
      this.emitChange();
    };
    
    canMovePlane(itemType) {
      return itemType === ItemTypes.PLANE;
    };

    emitChange() {
      const pos = this.planePosition;
      this.observers.forEach((o) => o && o(pos));
    };
  }
  