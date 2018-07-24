import conn from '../../persistance/db.mjs';

class ListService {
  constructor() {
    this.db = conn;
  }
  async addToList(game) {
    await this.db.insert(game);
  }
}

export default ListService;
