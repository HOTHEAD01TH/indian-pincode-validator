const PINCODE_DATABASE = {
    // JAMMU & KASHMIR (18xxxx)
    "180001": { area: "Jammu Cantt", city: "Jammu", district: "Jammu", state: "Jammu & Kashmir", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 32.7266, longitude: 74.8570 },
    "190001": { area: "Lal Chowk", city: "Srinagar", district: "Srinagar", state: "Jammu & Kashmir", region: "North", zone: "Northern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 5, isMetro: false, tier: 2, latitude: 34.0837, longitude: 74.7973 },
    "194101": { area: "Leh", city: "Leh", district: "Leh", state: "Ladakh", region: "North", zone: "Northern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 7, isMetro: false, tier: 3, latitude: 34.1526, longitude: 77.5770 },
    
    // HIMACHAL PRADESH (17xxxx)
    "171001": { area: "The Mall", city: "Shimla", district: "Shimla", state: "Himachal Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 31.1048, longitude: 77.1734 },
    "175001": { area: "Manali", city: "Manali", district: "Kullu", state: "Himachal Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 32.2396, longitude: 77.1887 },
    "176001": { area: "Dharamshala", city: "Dharamshala", district: "Kangra", state: "Himachal Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 32.2190, longitude: 76.3234 },
  
    // PUNJAB (14xxxx-16xxxx)
    "140001": { area: "Sector 17", city: "Chandigarh", district: "Chandigarh", state: "Chandigarh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 30.7333, longitude: 76.7794 },
    "141001": { area: "Civil Lines", city: "Ludhiana", district: "Ludhiana", state: "Punjab", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 30.9010, longitude: 75.8573 },
    "143001": { area: "Golden Temple", city: "Amritsar", district: "Amritsar", state: "Punjab", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 31.6340, longitude: 74.8723 },
    "152001": { area: "Moga", city: "Moga", district: "Moga", state: "Punjab", region: "North", zone: "Northern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 30.8173, longitude: 75.1723 },
  
    // HARYANA (12xxxx-13xxxx)
    "121001": { area: "Old Gurgaon", city: "Gurgaon", district: "Gurgaon", state: "Haryana", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 28.4595, longitude: 77.0266 },
    "122001": { area: "Sector 14", city: "Faridabad", district: "Faridabad", state: "Haryana", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 28.4089, longitude: 77.3178 },
    "132001": { area: "Model Town", city: "Karnal", district: "Karnal", state: "Haryana", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 29.6857, longitude: 76.9905 },
  
    // DELHI (11xxxx)
    "110001": { area: "Connaught Place", city: "New Delhi", district: "Central Delhi", state: "Delhi", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx", "DHL"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 28.6315, longitude: 77.2167 },
    "110016": { area: "Lajpat Nagar", city: "New Delhi", district: "South Delhi", state: "Delhi", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 28.5677, longitude: 77.2456 },
    "110085": { area: "Janakpuri", city: "New Delhi", district: "West Delhi", state: "Delhi", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 28.6219, longitude: 77.0857 },
  
    // UTTAR PRADESH (20xxxx-28xxxx)
    "201001": { area: "City Centre", city: "Ghaziabad", district: "Ghaziabad", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 28.6692, longitude: 77.4538 },
    "208001": { area: "Civil Lines", city: "Kanpur", district: "Kanpur Nagar", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 26.4499, longitude: 80.3319 },
    "221001": { area: "Godaulia", city: "Varanasi", district: "Varanasi", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 25.3176, longitude: 82.9739 },
    "226001": { area: "Hazratganj", city: "Lucknow", district: "Lucknow", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 1, latitude: 26.8467, longitude: 80.9462 },
    "244001": { area: "Civil Lines", city: "Moradabad", district: "Moradabad", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 28.8386, longitude: 78.7733 },
    "250001": { area: "Paltan Bazaar", city: "Meerut", district: "Meerut", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 28.9845, longitude: 77.7064 },
    "282001": { area: "Sadar Bazaar", city: "Agra", district: "Agra", state: "Uttar Pradesh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 27.1767, longitude: 78.0081 },
  
    // RAJASTHAN (30xxxx-34xxxx)
    "302001": { area: "Pink City", city: "Jaipur", district: "Jaipur", state: "Rajasthan", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 1, latitude: 26.9124, longitude: 75.7873 },
    "313001": { area: "City Palace", city: "Udaipur", district: "Udaipur", state: "Rajasthan", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 24.5854, longitude: 73.6823 },
    "342001": { area: "Clock Tower", city: "Jodhpur", district: "Jodhpur", state: "Rajasthan", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 26.2389, longitude: 73.0243 },
  
    // GUJARAT (36xxxx-39xxxx)
    "380001": { area: "Ellis Bridge", city: "Ahmedabad", district: "Ahmedabad", state: "Gujarat", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: true, tier: 1, latitude: 23.0225, longitude: 72.5714 },
    "390001": { area: "Raopura", city: "Vadodara", district: "Vadodara", state: "Gujarat", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 22.3072, longitude: 73.1812 },
    "395001": { area: "Nanpura", city: "Surat", district: "Surat", state: "Gujarat", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 1, latitude: 21.1702, longitude: 72.8311 },
  
    // MAHARASHTRA (40xxxx-44xxxx)
    "400001": { area: "Fort", city: "Mumbai", district: "Mumbai City", state: "Maharashtra", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx", "DHL"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 18.9322, longitude: 72.8264 },
    "411001": { area: "Pune Station", city: "Pune", district: "Pune", state: "Maharashtra", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 18.5204, longitude: 73.8567 },
    "440001": { area: "Sitabuldi", city: "Nagpur", district: "Nagpur", state: "Maharashtra", region: "West", zone: "Central", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 21.1458, longitude: 79.0882 },
    "416001": { area: "Rajarampuri", city: "Kolhapur", district: "Kolhapur", state: "Maharashtra", region: "West", zone: "Western", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 16.7050, longitude: 74.2433 },
  
    // GOA (403xxx)
    "403001": { area: "Panaji", city: "Panaji", district: "North Goa", state: "Goa", region: "West", zone: "Western", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 15.4909, longitude: 73.8278 },
  
    // KARNATAKA (56xxxx-59xxxx)
    "560001": { area: "Bangalore GPO", city: "Bangalore", district: "Bangalore Urban", state: "Karnataka", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 12.9716, longitude: 77.5946 },
    "575001": { area: "Hampankatta", city: "Mangalore", district: "Dakshina Kannada", state: "Karnataka", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 12.9141, longitude: 74.8560 },
    "580001": { area: "Hubli", city: "Hubli", district: "Dharwad", state: "Karnataka", region: "South", zone: "Southern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 15.3647, longitude: 75.1240 },
    "570001": { area: "Devaraja Mohalla", city: "Mysore", district: "Mysore", state: "Karnataka", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 12.2958, longitude: 76.6394 },
  
    // ANDHRA PRADESH & TELANGANA (50xxxx-53xxxx)
    "500001": { area: "Abids", city: "Hyderabad", district: "Hyderabad", state: "Telangana", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 17.3850, longitude: 78.4867 },
    "520001": { area: "Governorpet", city: "Vijayawada", district: "Krishna", state: "Andhra Pradesh", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 16.5062, longitude: 80.6480 },
    "530001": { area: "Dwaraka Nagar", city: "Visakhapatnam", district: "Visakhapatnam", state: "Andhra Pradesh", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 17.6868, longitude: 83.2185 },
  
    // TAMIL NADU (60xxxx-64xxxx)
    "600001": { area: "George Town", city: "Chennai", district: "Chennai", state: "Tamil Nadu", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx", "DHL"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 13.0827, longitude: 80.2707 },
    "641001": { area: "RS Puram", city: "Coimbatore", district: "Coimbatore", state: "Tamil Nadu", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 11.0168, longitude: 76.9558 },
    "625001": { area: "Main Guard Gate", city: "Madurai", district: "Madurai", state: "Tamil Nadu", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 9.9252, longitude: 78.1198 },
    "620001": { area: "Cantonment", city: "Tiruchirappalli", district: "Tiruchirappalli", state: "Tamil Nadu", region: "South", zone: "Southern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 10.7905, longitude: 78.7047 },
  
    // KERALA (67xxxx-69xxxx)
    "682001": { area: "Ernakulam", city: "Kochi", district: "Ernakulam", state: "Kerala", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 1, latitude: 9.9312, longitude: 76.2673 },
    "695001": { area: "Palayam", city: "Thiruvananthapuram", district: "Thiruvananthapuram", state: "Kerala", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 8.5241, longitude: 76.9366 },
    "673001": { area: "Mananchira", city: "Kozhikode", district: "Kozhikode", state: "Kerala", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 11.2588, longitude: 75.7804 },
  
    // WEST BENGAL (70xxxx-74xxxx)
    "700001": { area: "BBD Bagh", city: "Kolkata", district: "Kolkata", state: "West Bengal", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom", "FedEx"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 22.5726, longitude: 88.3639 },
    "711001": { area: "Howrah Station", city: "Howrah", district: "Howrah", state: "West Bengal", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 22.5958, longitude: 88.2636 },
    "721001": { area: "Midnapore", city: "Midnapore", district: "Paschim Medinipur", state: "West Bengal", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 22.4249, longitude: 87.3184 },
  
    // ODISHA (75xxxx-77xxxx)
    "751001": { area: "Bhubaneswar", city: "Bhubaneswar", district: "Khordha", state: "Odisha", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 20.2961, longitude: 85.8245 },
    "753001": { area: "Cuttack", city: "Cuttack", district: "Cuttack", state: "Odisha", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 20.4625, longitude: 85.8828 },
  
    // BIHAR (80xxxx-85xxxx)
    "800001": { area: "Patna City", city: "Patna", district: "Patna", state: "Bihar", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 25.5941, longitude: 85.1376 },
    "841001": { area: "Muzaffarpur", city: "Muzaffarpur", district: "Muzaffarpur", state: "Bihar", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 26.1209, longitude: 85.3647 },
  
    // JHARKHAND (81xxxx-83xxxx)
    "834001": { area: "Main Road", city: "Ranchi", district: "Ranchi", state: "Jharkhand", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 23.3441, longitude: 85.3096 },
    "831001": { area: "Sakchi", city: "Jamshedpur", district: "East Singhbhum", state: "Jharkhand", region: "East", zone: "Eastern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 22.8046, longitude: 86.2029 },
  
    // ASSAM (78xxxx)
    "781001": { area: "Paltan Bazaar", city: "Guwahati", district: "Kamrup Metropolitan", state: "Assam", region: "Northeast", zone: "Northeastern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 26.1445, longitude: 91.7362 },
    "788001": { area: "Silchar", city: "Silchar", district: "Cachar", state: "Assam", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 5, isMetro: false, tier: 3, latitude: 24.8333, longitude: 92.7789 },
  
    // NORTHEAST STATES (79xxxx)
    "793001": { area: "Shillong", city: "Shillong", district: "East Khasi Hills", state: "Meghalaya", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 5, isMetro: false, tier: 3, latitude: 25.5788, longitude: 91.8933 },
    "795001": { area: "Imphal", city: "Imphal", district: "Imphal West", state: "Manipur", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 6, isMetro: false, tier: 3, latitude: 24.8170, longitude: 93.9368 },
    "796001": { area: "Aizawl", city: "Aizawl", district: "Aizawl", state: "Mizoram", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 7, isMetro: false, tier: 3, latitude: 23.7271, longitude: 92.7176 },
    "797001": { area: "Kohima", city: "Kohima", district: "Kohima", state: "Nagaland", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 6, isMetro: false, tier: 3, latitude: 25.6751, longitude: 94.1086 },
    "799001": { area: "Agartala", city: "Agartala", district: "West Tripura", state: "Tripura", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 5, isMetro: false, tier: 3, latitude: 23.8315, longitude: 91.2868 },
    "791001": { area: "Itanagar", city: "Itanagar", district: "Papum Pare", state: "Arunachal Pradesh", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 7, isMetro: false, tier: 3, latitude: 27.0844, longitude: 93.6053 },
    "737001": { area: "Gangtok", city: "Gangtok", district: "East Sikkim", state: "Sikkim", region: "Northeast", zone: "Northeastern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 5, isMetro: false, tier: 3, latitude: 27.3389, longitude: 88.6065 },
  
    // MADHYA PRADESH (45xxxx-49xxxx)
    "452001": { area: "Rajwada", city: "Indore", district: "Indore", state: "Madhya Pradesh", region: "Central", zone: "Central", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 2, isMetro: false, tier: 1, latitude: 22.7196, longitude: 75.8577 },
    "462001": { area: "New Market", city: "Bhopal", district: "Bhopal", state: "Madhya Pradesh", region: "Central", zone: "Central", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 23.2599, longitude: 77.4126 },
    "474001": { area: "Lashkar", city: "Gwalior", district: "Gwalior", state: "Madhya Pradesh", region: "Central", zone: "Central", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 26.2183, longitude: 78.1828 },
    "482001": { area: "Civil Lines", city: "Jabalpur", district: "Jabalpur", state: "Madhya Pradesh", region: "Central", zone: "Central", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 23.1815, longitude: 79.9864 },
  
    // CHHATTISGARH (49xxxx)
    "492001": { area: "Raipur", city: "Raipur", district: "Raipur", state: "Chhattisgarh", region: "Central", zone: "Central", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 21.2514, longitude: 81.6296 },
    "495001": { area: "Bilaspur", city: "Bilaspur", district: "Bilaspur", state: "Chhattisgarh", region: "Central", zone: "Central", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 4, isMetro: false, tier: 3, latitude: 22.0797, longitude: 82.1409 },
  
    // UTTARAKHAND (24xxxx-26xxxx)
    "248001": { area: "Paltan Bazaar", city: "Dehradun", district: "Dehradun", state: "Uttarakhand", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 30.3165, longitude: 78.0322 },
    "263001": { area: "Haldwani", city: "Haldwani", district: "Nainital", state: "Uttarakhand", region: "North", zone: "Northern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 29.2183, longitude: 79.5130 },
    "249001": { area: "Haridwar", city: "Haridwar", district: "Haridwar", state: "Uttarakhand", region: "North", zone: "Northern", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 2, latitude: 29.9457, longitude: 78.1642 },
  
    // UNION TERRITORIES
    "160001": { area: "Sector 17", city: "Chandigarh", district: "Chandigarh", state: "Chandigarh", region: "North", zone: "Northern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery", "Ecom"], deliveryDays: 1, isMetro: true, tier: 1, latitude: 30.7333, longitude: 76.7794 },
    "605001": { area: "White Town", city: "Puducherry", district: "Puducherry", state: "Puducherry", region: "South", zone: "Southern", codAvailable: true, courierServices: ["BlueDart", "DTDC", "Delhivery"], deliveryDays: 2, isMetro: false, tier: 2, latitude: 11.9416, longitude: 79.8083 },
    "744101": { area: "Port Blair", city: "Port Blair", district: "South Andaman", state: "Andaman & Nicobar Islands", region: "South", zone: "Southern", codAvailable: false, courierServices: ["DTDC"], deliveryDays: 10, isMetro: false, tier: 3, latitude: 11.6234, longitude: 92.7265 },
    "364001": { area: "Daman", city: "Daman", district: "Daman", state: "Daman & Diu", region: "West", zone: "Western", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 3, isMetro: false, tier: 3, latitude: 20.4283, longitude: 72.8397 },
    "370001": { area: "Bhuj", city: "Bhuj", district: "Kachchh", state: "Gujarat", region: "West", zone: "Western", codAvailable: true, courierServices: ["DTDC", "Delhivery"], deliveryDays: 4, isMetro: false, tier: 3, latitude: 23.2420, longitude: 69.6669 }
  };
  
  module.exports = PINCODE_DATABASE;
  