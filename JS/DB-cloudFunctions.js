

export async function GetCollectionNames(id) {
    return {};
}

export async function GetNotDeployedCollectionNames(id){
    return {};
}

export async function GetConfiguredNotDeployedCollectionNames(id){
    return {};
}

export async function GetDeployedCollectionNames(id){
    return {};
}


export async function GetContractAddress(collectionName) {
    return {};
}


export async function IsCollectionRevealed(collectionName) {
    return {};
}

export async function DoesCollectionExist(collectionName){
    return {};
}

export async function GetCollectionSize(collectionName){
    return {};
}

export async function GetCollectionLength(collectionName){
    return {};
}

export async function ConstructMetadataLegit(collectionName, id){
    return {};
}

export async function ConstructMetadataPreReveal(collectionName, id){
    return {};
}
  

export async function CheckIfUserOwnsCollection(collectionName, userAccount){
    return {};
}

// similar to below, but it collection data from all the collections owned by an owner
export async function GetCollectionsDetailsByOwner(userAccount){
    return {};
}

// similar to above but more efficient -> gets only data for 1 particular collection
export async function GetCollectionDetailsByCollectionName(collectionName){
    return {};
}



export async function GetCollectionDescription(collectionName){
    return {};
}


export async function GetImageURL(collectionName, id){
    return {};
}

export async function GetPrerevealImageURL(collectionName){
    return {};
}