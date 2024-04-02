export const fetchProfiles = async () => {
  try {
    const response = await fetch("../../profiles_data.json");

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    /* console.log(data.profiles); */
    return data.jobs;
  } catch (error) {
    console.error("Error fetching data");
  }
};
