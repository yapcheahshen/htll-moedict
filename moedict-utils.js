//去掉 詞頭後的西文，以利結尾比對
export const normalizeText=s=>s.replace(/[\(（].+/,'');