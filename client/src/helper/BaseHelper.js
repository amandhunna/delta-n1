import mainConfig from './../config/main'
import crypto from 'crypto';

const { algorithm, secretKey, iv } = mainConfig;

class BaseHelper {
    encrypt(text) {
        const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        return {
            iv: iv.toString('hex'),
            content: encrypted.toString('hex')
        };
    };
    
    decrypt(hash) {
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
        return decrpyted.toString();
    };

    deepClone(value /* non primitive value */) {
        const cloneValue = JSON.parse(JSON.stringify(value));
        return cloneValue;
    }

    async hashPassword(password) {
        const hash =  crypto.createHash('sha1').update(password, "utf8").digest("hex");;
        return hash;
    }

    getPrice(currencyType, price) {
        const currencySymbol = {
            'in': '₹'
        }
        return `${currencySymbol[currencyType]} ${price}`;
    }
    
}

export default BaseHelper;
