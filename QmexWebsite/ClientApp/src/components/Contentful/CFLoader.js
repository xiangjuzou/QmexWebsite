// Class om contentfull data op te halen
import { createClient } from 'contentful';


export default class CFLoader {

    static getClient() {
        return createClient({
            space: "p4qxq1qhlde2",
            accessToken: "vZZVr3OZoAa2hWK0-jPBwNLQufMjONelt-yv7fv24-s",
         
        });
    }

    static LoadPage(entryId, name, callback) {

        let cf = this.getClient();

        cf.getEntry(entryId).then((data) => {
            let newstate = {};
            newstate[name] = data.fields;
            callback(newstate);
        });
    }

    static Loadhoofdmenu(slug, callback) {

        let cf = this.getClient();

        cf.getEntries({ 'fields.slug': slug, 'content_type': 'producthoofdmenu' }).then((data) => {
            let newstate = {};
            newstate['product_' + slug] = data.items[0].fields;
            callback(newstate);
        });
    }


    static LoadProductSlugs(callback) {

        let cf = this.getClient();

        cf.getEntries({ 'content_type': 'productdetail', 'select': 'fields.slug' }).then((data) => {
            let newstate = { productslug: data.items };
            callback(newstate);
        });
    }

    static LoadBlogSlugs(callback) {

        let cf = this.getClient();

        cf.getEntries({ 'content_type': 'blogDetail', 'select': 'fields.slug' }).then((data) => {
            let newstate = { blogslug: data.items };
            callback(newstate);
        });
    }

    static Search(words, callback) {
        let cf = this.getClient();
        let scentence = '"' + words + '"';

        cf.getEntries({ 'query': scentence }).then((data) => {
            let newstate = { search: data.items };
            callback(newstate);
        }).catch((reason) => {
            callback(undefined);
        });
    }
}