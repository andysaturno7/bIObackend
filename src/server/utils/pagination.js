module.exports = class Pagination {
    static limit = 15;
    static offset = 0;
  
    static async FindPaginated(table, queries, limit, offset) {
      limit = limit || Pagination.limit;
      offset = offset || Pagination.offset;
      queries = { limit, offset, ...queries };
      try {
        let data = await table.findAndCountAll(queries);
        return {
          count: data.count,
          limit,
          offset,
          data: data.rows,
        };
      } catch (error) {
        throw error;
      }
    }
  
    static MiddlewarePaginationQueries(req, res, next) {
      let { offset, limit } = req.query;
      let pagination = {
        offset: offset ? parseInt(offset) : null,
        limit: limit ? parseInt(limit) : null,
      };
      req["pagination"] = pagination;
      next();
    }
  };
  