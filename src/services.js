import { Drivers, Storage } from "@ionic/storage";

export class StorageService {
  constructor() {
    this.init_storage();
    console.log(this._storage);
  }

  // initalize on-device native storage
  async init_storage() {
    this._storage = new Storage({
      name: "__dbnd",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await this._storage.create();
  }

  async set_data(key, val) {
    if (typeof key != "string") {
      throw new Error(`Key ${key} is not a String`);
    }
    if (this._storage === null) {
      throw new Error("_storage is null");
    }
    await this._storage.set(key, val);
  }

  async get_data(key) {
    if (typeof key != "string") {
      throw new Error(`Key ${key} is not a String`);
    }
    if (this._storage === null) {
      throw new Error("_storage is null");
    }
    await this._storage.get(key);
  }

  async remove(key) {
    if (typeof key != "string") {
      throw new Error(`Key ${key} is not a String`);
    }
    if (this._storage === null) {
      throw new Error("_storage is null");
    }
    await this._storage.remove(key);
  }

  async clear_data() {
    if (this._storage === null) {
      throw new Error("_storage is null");
    }
    await this._storage.clear();
  }

  async get_storage_items() {
    if (this._storage === null) {
      throw new Error("_storage is null");
    }
    await this._storage.keys();
  }

  encrypt_key(key) {
    if (typeof key != "string") {
      throw new Error(`Key ${key} is not a String`);
    }
    if (this._storage === null) {
      throw new Error("_storage is null");
    }
    this._storage.setEncryptionKey(key);
  }
}
