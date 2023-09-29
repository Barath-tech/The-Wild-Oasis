import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins data cannot be loaded..");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/Cabins/${imageName}`;

  //Creating cabin
  const { data, error } = await supabase.from("cabins").insert([newCabin]);
  //upload image
  const { error: storageError } = await supabase.storage
    .from("Cabins")
    .upload(imageName, newCabin.image);

  //Delete cabin if there was an error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new error(
      "Cabin image coulld not be uploaded and cabin could not be created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new error("Cabins cannot be deleted");
  }

  return data;
}
