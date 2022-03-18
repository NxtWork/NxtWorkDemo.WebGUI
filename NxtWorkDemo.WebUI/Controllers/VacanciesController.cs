using Bogus;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NxtWorkDemo.Core.DataServices;
using NxtWorkDemo.Core.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NxtWorkDemo.WebUI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VacanciesController : ControllerBase
    {
        // private readonly List<Vacancy> _vacancies;
        private readonly ILogger<VacanciesController> _logger;
        private readonly IVacancyService _vacancyService;

        public VacanciesController(ILogger<VacanciesController> logger, IVacancyService vacancyService)
        {
            // _vacancies = new List<Vacancy>();

            //Faker<Contacts> contactFaker = new Faker<Contacts>()
            //    .RuleFor(c => c.Address, f => f.Address.StreetAddress(true))
            //    .RuleFor(c => c.Email, f => f.Internet.Email())
            //    .RuleFor(c => c.Phone, f => f.Phone.PhoneNumber());

            //Faker<Company> companyFaker = new Faker<Company>()
            //    .RuleFor(c => c.Id, f => Guid.NewGuid())
            //    .RuleFor(c => c.Name, f => f.Company.CompanyName())
            //    .RuleFor(c => c.Industry, f => f.Name.JobArea())
            //    .RuleFor(c => c.Description, f => f.Company.CatchPhrase() + ". " + f.Company.Bs())
            //    .RuleFor(c => c.Rating, f => f.Random.Double(1, 5))
            //    .RuleFor(c => c.Contacts, f => contactFaker.Generate());

            //Faker<Requirement> requirementFaker = new Faker<Requirement>()
            //    .RuleFor(r => r.Key, f => f.Random.Words(3))
            //    .RuleFor(r => r.Value, f => f.Random.WordsArray(1, 3).ToString());

            //Faker<Vacancy> vacancyFaker = new Faker<Vacancy>()
            //    .RuleFor(v => v.Id, f => Guid.NewGuid())
            //    .RuleFor(v => v.Title, f => f.Name.JobTitle())
            //    .RuleFor(v => v.Description, f => f.Name.JobDescriptor() + ". " + f.Name.JobType() + " - " + f.Random.Words(10))
            //    .RuleFor(v => v.Contacts, f => contactFaker.Generate())
            //    .RuleFor(v => v.Requirements, f => requirementFaker.Generate(4))
            //    .RuleFor(v => v.TumbnailImage, f => f.Image.LoremFlickrUrl(keywords: "business job work"))
            //    .RuleFor(v => v.Company, f => companyFaker.Generate())
            //    .RuleFor(v => v.CompanyId, f => Guid.NewGuid())
            //    .RuleFor(v => v.Salary, f => f.Random.Int(5, 8).ToString() + " EUR / h");

            //_vacancies = vacancyFaker.Generate(10);
            _logger = logger;
            _vacancyService = vacancyService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vacancy>>> Get()
        {
            // _logger.LogInformation($"Return {_vacancies.Count} vacancies");
            // return Ok(_vacancies);

            var result = (List<Vacancy>) await _vacancyService.GetAllVacancies();
            _logger.LogInformation($"Returns {result.Count}");
            return result;
        }
    }
}
