using Microsoft.Extensions.Options;
using NxtWorkDemo.Core.DataServices;
using NxtWorkDemo.Core.Entities;
using NxtWorkDemo.Core.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace NxtWorkDemo.Infrastructure.DataServices
{
    public class VacancyService : IVacancyService
    {
        private readonly HttpClient _httpClient;
        private readonly IOptions<ServerOptions> _serverOptions;

        public VacancyService(HttpClient httpClient, IOptions<ServerOptions> serverOptions)
        {
            _httpClient = httpClient;
            _serverOptions = serverOptions;
        }

        public async Task<IEnumerable<Vacancy>> GetAllVacancies()
        {
            return await _httpClient.GetFromJsonAsync<IEnumerable<Vacancy>>(_serverOptions.Value.VacanciesEndpoint);
        }
    }
}
