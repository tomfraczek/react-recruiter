 //GET THE DD.MM.YYYY FORMAT
 export function formatDate(unformatedDate) {
    const date = new Date(unformatedDate);
    const day = (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());
    const month = (date.getMonth() < 9 ? '0' + Number(date.getMonth() + 1) : Number(date.getMonth() + 1));
    const year = date.getFullYear();

    return (`${day}.${(month)}.${year}`)
    }

    