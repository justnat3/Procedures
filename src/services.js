export class StorageService {
    private _storage = null;

    constructor(private storage) {
        this.init_storage();
    }
    // initalize on-device native storage
    async init_storage() {
        const storage = await store.create();
        this._storage = storage;
    }

    async set_data(key, val) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        }
        await this._storage.set(key, value);
    }

    get_data(key) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        }
        await this.storage.get(key);
    }

    async remove(key) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        await store.remove(key);
    }

    async clear_data() {
        await store.clear();
    }

    async get_storage_items() {
        await store.keys();
    }

    encrypt_key(key) {
        if (typeof(key) != String) {
            throw new Error("Key ${key} is not a String");
        }
        store.setEncryptionKey(key);
    }
}





