class monster extends SimEntity {
  this.CR = 0;
  constructor(entityID, name, type, CR) {
    super(entityID, name, type);
    this.CR = CR;
  }
}

class goblin extends monster {

}
