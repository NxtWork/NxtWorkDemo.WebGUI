using NxtWorkDemo.Core.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NxtWorkDemo.Core.DataServices
{
    public interface IVacancyService
    {
        Task<IEnumerable<Vacancy>> GetAllVacancies();
        Task<Vacancy> GetVacancy(Guid id);
    }
}
