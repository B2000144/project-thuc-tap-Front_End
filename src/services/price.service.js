import createApiClient from "./api.service";
class PriceService {
  constructor(baseUrl = "/api/v1/price") {
    this.api = createApiClient(baseUrl);
  }
  async getDefaultPrice(id) {
    try {
      const response = await this.api.get(`/defaultPrice/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPriceKeyValue(id, key, value) {
    try {
      const response = await this.api.get(`/${id}`, {
        params: {
          key: key,
          value: value,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new PriceService();
