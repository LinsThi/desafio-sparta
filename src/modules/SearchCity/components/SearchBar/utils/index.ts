export function filterRepeatCities(arrayCities: any) {
  const uniqueCities = arrayCities.sort().reduce((init: any, current: any) => {
    if (
      init.length === 0 ||
      init[init.length - 1].display_name !== current.display_name
    ) {
      init.push(current);
    }
    return init;
  }, []);

  return uniqueCities;
}
