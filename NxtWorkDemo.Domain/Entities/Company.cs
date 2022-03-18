using System;
using System.Collections.Generic;

namespace NxtWorkDemo.Core.Entities
{
    public class Company
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Industry { get; set; }
        public string Description { get; set; }
        public double Rating { get; set; }
        //public IEnumerable<Vacancy> Vacancies { get; set; }
        public Contacts Contacts { get; set; }
    }
}