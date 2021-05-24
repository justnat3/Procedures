import { Storage } from '@ionic/storage';

export class StorageService {
    _storage = null;

    constructor() {
        this.init_storage();
    }

    // initalize on-device native storage
    async init_storage() {
        const storage = await Storage.create();
        this._storage = storage;
    }

    async set_data(key, val) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        }
        if this._storage === null {
            throw new Error("_storage is null");
        }
        await this._storage.set(key, value);
    }

    get_data(key) {
        if (typeof(key) != String) {
            throw new Error(`Key ${key} is not a String`);
        }
        if this._storage === null {
            throw new Error("_storage is null");
        }
        await this._storage.get(key);
    }

    async remove(key) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        }
        if this._storage === null {
            throw new Error("_storage is null");
        }
        await this._storage.remove(key);
    }

    async clear_data() {
        if this._storage === null {
            throw new Error("_storage is null");
        }
        await this._storage.clear();
    }

    async get_storage_items() {
        if this._storage === null {
            throw new Error("_storage is null");
        }
        await this._storage.keys();
    }

    encrypt_key(key) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        }
        if this._storage === null {
            throw new Error("_storage is null");
        }
        this._storage.setEncryptionKey(key);
    }
}




