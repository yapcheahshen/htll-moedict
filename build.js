import {LabelType} from 'pitaka/htll'
import {Builder} from 'pitaka/db'
import {normalizeText} from './moedict-utils.js';
const testBuild=()=>{
    const builder=new Builder({name:'moedict'});
    builder.defineLabel('entry',LabelType.LabelDictEntry,{normalizeText});

    builder.addFile('moedict.htl');
    builder.finalize();

}
console.clear();
testBuild();
