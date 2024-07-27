function imageUrl(collectionId: string, id: string, imageName: string) {
    return `http://192.168.0.207:8090/api/files/${collectionId}/${id}/${imageName}`
}

export { imageUrl }