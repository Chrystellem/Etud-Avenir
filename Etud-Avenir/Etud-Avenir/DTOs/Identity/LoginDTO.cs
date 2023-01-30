﻿using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Etud_Avenir.DTOs.Identity
{
    public class LoginDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
