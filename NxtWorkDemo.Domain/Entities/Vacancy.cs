using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NxtWorkDemo.Core.Entities
{
    public class Vacancy
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        [JsonPropertyName("thumbnail_image")]
        public string ThumbnailImage { get; set; }
        public IEnumerable<Requirement> Requirements { get; set; }
        public Company Company { get; set; }
        public Guid CompanyId { get; set; }
        public Contacts Contacts { get; set; }
        public string Salary { get; set; }

        //public Vacancy()
        //{
        //    Contacts = Company.Contacts;
        //    CompanyId = Company.Id;
        //}
    }
}
