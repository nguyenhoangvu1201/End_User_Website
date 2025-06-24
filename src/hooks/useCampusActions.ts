export function useCampusActions() {
  const handleCallPhone = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };
  const handleDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };
  const handleVisitWebsite = (website: string) => {
    window.open(`https://${website}`, '_blank');
  };
  return { handleCallPhone, handleDirections, handleVisitWebsite };
} 